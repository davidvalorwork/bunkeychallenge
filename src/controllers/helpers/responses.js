module.exports = {
  success:  (payload,res) => res.status(200).send(payload),
  error:    (err,res)     => res.status(500).send(err)
}
