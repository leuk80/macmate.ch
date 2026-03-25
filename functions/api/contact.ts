interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  _honeypot?: string;
}

export const onRequestPost: PagesFunction = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://macmate.ch',
  };

  try {
    const formData = await context.request.formData();

    const data: ContactForm = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || undefined,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      _honeypot: formData.get('_honeypot') as string || undefined,
    };

    // Anti-spam: honeypot check
    if (data._honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200, headers });
    }

    // Validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte fülle alle Pflichtfelder aus.' }),
        { status: 400, headers }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte gib eine gültige E-Mail-Adresse ein.' }),
        { status: 400, headers }
      );
    }

    // Send via Web3Forms (Free: 250 emails/month)
    // TODO: Replace with actual Web3Forms access key
    const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO: Replace with real key
        name: data.name,
        email: data.email,
        phone: data.phone || 'Nicht angegeben',
        subject: `MacMate Kontakt: ${data.subject}`,
        message: data.message,
        from_name: 'MacMate Website',
      }),
    });

    if (!web3formsResponse.ok) {
      throw new Error('Web3Forms API error');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet!' }),
      { status: 200, headers }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.' }),
      { status: 500, headers }
    );
  }
};
