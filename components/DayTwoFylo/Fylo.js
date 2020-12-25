import { useEffect, useState } from 'react'
import styles from './Fylo.module.scss'

export default function Fylo() {
 const [error, setError] = useState('')
 const [value, setValue] = useState('')

 useEffect(()=>{
  if (value.length > 5) {
   setError('Please enter a valid email address')
  }
 }, [value])
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src='/fylo/logo.svg' />
        </div>
        <nav>
          <a href='#features'>Features</a>
          <a href=''>Team</a>
          <a href=''>Sign In</a>
        </nav>
      </header>
      <section className={styles.hero}>
        <div className={styles.hero_img_wrapper}>
          <img src='/fylo/illustration-intro.png' />
        </div>

        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className={styles.button_cta}>Get Started</button>
      </section>
      <section id='features' className={styles.features}>
        <div className={styles.card}>
          <div>
            <img src='/fylo/icon-access-anywhere.svg' />
          </div>
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src='/fylo/icon-security.svg' />
          </div>
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src='/fylo/icon-collaboration.svg' />
          </div>
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className={styles.card}>
          <div>
            <img src='/fylo/icon-any-file.svg' />
          </div>
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>

      <section className={styles.stayProductive}>
        <div className={styles.productive_img_wrapper}>
          <img src='/fylo/illustration-stay-productive.png' />
        </div>
        <div className={styles.productive_text_wrapper}>
          <h3>Stay productive, wherever you are</h3>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href=''>
            See how Fylo works<span>&rarr;</span>
          </a>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.card_testimonial}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={styles.card_testimonial_person}>
            <img src='/fylo/profile-1.jpg' />
            <div>
              <p className={styles.name}>Satish Patel</p>
              <p className={styles.subheading}>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className={styles.card_testimonial}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={styles.card_testimonial_person}>
            <img src='/fylo/profile-2.jpg' />
            <div>
              <p className={styles.name}>Bruce McKenzie</p>
              <p className={styles.subheading}>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className={styles.card_testimonial}>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className={styles.card_testimonial_person}>
            <img src='/fylo/profile-3.jpg' />
            <div>
              <p className={styles.name}>Iva Boyd</p>
              <p className={styles.subheading}>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.subscribe}>
        <form noValidate>
          <h3>Get early access today</h3>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <input type='email' name='email' value={value} 
          onChange={(e) => setValue(e.target.value)}
          placeholder='email@example.com' />
          <p className={styles.error}>{error}</p>
          <button
            className={styles.button_subscribe}
            type='submit'
            onClick={(e) => e.preventDefault()}
          >
            Get Started For Free
          </button>
        </form>
      </section>
      <section className={styles.section_contacts}>
        <div className={styles.contacts_logo}></div>
        <div className={styles.contacts}>
          <div className={styles.icon_location}>
            <img src='/fylo/icon-location.svg' />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className={styles.icon_phone}>
            <img src='/fylo/icon-phone.svg' />
          </div>
          <p>+1-543-123-4567</p>
          <div className={styles.icon_email}>
            <img src='/fylo/icon-email.svg' />
          </div>
          <p>example@fylo.com</p>
        </div>
      </section>
      <footer className={styles.footer}>
        <ul>
          <li><a href="">About Us</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Press</a></li>
          <li><a href="">Blog</a></li>
        </ul>
        <ul>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Terms</a></li>
          <li><a href="">Privacy</a></li>
        </ul>
        <div className={styles.social_icons}>
          <a href=''><img src='/fylo/facebook-svgrepo-com.svg' /></a>
          <a href=''><img src='/fylo/twitter-svgrepo-com.svg' /></a>
          <a href=''><img src='/fylo/instagram-svgrepo-com.svg' /></a>
        </div>
      </footer>
    </div>
  )
}
