export function handleContact(req, res) {
  const { name, email, message } = req.body;

  console.log('New contact form submission:');
  console.log({ name, email, message });

  res.status(200).json({ success: true, message: 'Message received!' });
}