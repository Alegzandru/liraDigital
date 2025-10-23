import Mailjet from 'node-mailjet'

const mailjet = new Mailjet({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRET_KEY,
})

const sendMail = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { budget, company, description, email, phone, name, services } =
    req.body.data

  const variables = {
    budget,
    company,
    description,
    email,
    phone,
    name,
    services: Array.isArray(services) ? services.join(', ') : services,
  }

  const msg = {
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL,
          Name: 'Lira Digital',
        },
        To: [
          {
            Email: process.env.SENDER_EMAIL,
            Name: 'Lira Digital Team',
          },
        ],
        TemplateID: 7423741,
        TemplateLanguage: true,
        Subject: `New Project Request from ${name}`,
        Variables: variables,
      },
    ],
  }

  try {
    const request = await mailjet.post('send', { version: 'v3.1' }).request(msg)
    console.log('Mailjet result:', request.body)
    res.json({ message: 'Email has been sent' })
  } catch (error) {
    console.error('Mailjet error:', error?.response?.data || error)
    res.status(500).json({
      error: error.message,
      details: error?.response?.data,
    })
  }
}

export default sendMail
