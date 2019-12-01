import React, { useState } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

export default function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/mdokkjgd',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div id={styles.contactPageWrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact</title>
        <meta
          name='description'
          content='Contact us at Thru Hike Data.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/contact' />
      </Helmet>
      <h4>Any trail data you want to add or change?</h4>
      <div id={styles.contactFormWrapper}>
        <form onSubmit={handleOnSubmit}>
          <div id={styles.firstInput}>
            <input
              id={styles.emailInput}
              type='email'
              name='email'
              placeholder='youremail@gmail.com'
              required
            />
          </div>

          <div id={styles.secondInput}>
            <textarea
              id={styles.messageInput}
              name='message'
              placeholder='Hey there, I was just at thruhikedata.com and...'
            ></textarea>
          </div>

          <button
            type='submit'
            id={styles.contactSubmitBtn}
            disabled={serverState.submitting}
          >
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? 'errorMsg' : ''}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
