//https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY
import styles from './style.module.scss'
import GoBack from '../GoBack'
import Credits from '../Credits'
export default function ChatApp() {
  return (
    <main className={styles.main}>
     <GoBack />
     <Credits />
      <section className={styles.phone_wrapper}>
        <div className={styles.phone}>
          <div className={styles.app}>
           {/* HEADER */}
            <div className={styles.app_header}>
              <button type="button">
                <i className={styles.arrow_left} />
              </button>

              <div className={styles.user_profile}>
                <img src='/dayOneChatApp/avatar.jpg' />
                <div>
                  <p className={styles.name}>Samuel Green</p>
                  <p className={styles.subheading}>Available to Walk</p>
                </div>
              </div>

              <button>•••</button>
            </div>

            {/* APP_BODY */}
            <div className={styles.app_body}>
              <p className={styles.message_in}>
                That sounds great. I’d be happy with that.
              </p>
              <p className={styles.message_in}>
                Could you send over some pictures of your dog, please?
              </p>

              <div className={styles.photos}>
                <img src='/dayOneChatApp/dog-image-1.jpg' />
                <img src='/dayOneChatApp/dog-image-2.jpg' />
                <img src='/dayOneChatApp/dog-image-3.jpg' />
              </div>

              <p className={styles.message_out}>
                Here are a few pictures. She’s a happy girl!
              </p>
              <p className={styles.message_out}>Can you make it?</p>
              <p className={styles.message_in}>
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </p>

              <div className={styles.message_price}>
                <input type='radio' id='minutes' name='price' value='30' />
                <label htmlFor='minutes'>
                  30 minute walk<span>29$</span>
                </label>
              </div>
              <div className={styles.message_price}>
                <input type='radio' id='hour' name='price' value='60' />
                <label htmlFor='hour'>
                  1 hour walk<span>49$</span>
                </label>
              </div>

              <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type='text' placeholder='Type a message...' />
                <button className={styles.button_send} type="submit">
                  <i className={styles.arrow_right} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.text_wrapper}>
        <h3>Simple booking</h3>
        <p>
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </section>
    </main>
  )
}
