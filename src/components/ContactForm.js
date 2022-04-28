import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const emailJsServiceId = 'service_ngl61g9'
  const emailJsTemplateId = 'template_4qd19f8'
  const emailJsPublicKey = 'nKyEQpHJh826eXyAl'

  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')

  let isSubmitDisabled = !(email && title && imageUrl && description)
  isSubmitDisabled = email.length === 0 || title.length === 0 || imageUrl.length === 0 || description.length === 0

  const submitForm = () => {
      emailjs.send(emailJsServiceId,emailJsTemplateId,{
        email: email,
        article_title: title,
        image_url: imageUrl,
        article_description: description,
        }, emailJsPublicKey)
        .then((response) => !alert('Article Suggestion sent successfully!') && window.location.reload())
        .catch((error) => alert('An error occurred!'))
  }

  return (
    <div className="contact-form">
    <h2>Article Suggestion</h2>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email address" name='email' />
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Article title" name='article_title'/>
        <input onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} type="text" placeholder="Image URL" name='image_url'/>
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="textbox" placeholder="Article description" name='article_description'/> <br />
        <input disabled={isSubmitDisabled} onClick={submitForm} type="submit" value="Send us an article"/>
    </div>
  )
}

export default ContactForm