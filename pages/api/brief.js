import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY)

const sendMail = async (req, res) => {

  const { budget, company, description, email, phone, name, services } = req.body.data

  const templateData = {
    budget,
    company,
    description,
    email,
    phone,
    name,
    services,
  }

  const msg = {
    from: 'office@lira.md',
    to : 'office@lira.md',
    dynamic_template_data : templateData,
    template_id : 'd-5f3c46a2f4ff43eba3cb6b0431b84432',
  }

  try {
    await sgMail.send(msg)
    res.json({ message: 'Email has been sent' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail
