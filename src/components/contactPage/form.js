import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { FormWrapper } from './form.styled';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.CONTACTFORM_FORMSPREE_KEY);

    return state.succeeded ? (
        <div>
            <p>Your message is successfully submited!</p>
            <p>We'll contact you soon</p>
        </div>
    ) : (
        <FormWrapper
            onSubmit={handleSubmit}
            >
            <label className="visually-hidden"
                htmlFor="name">
                name
            </label>
            <input type="text"
                name="name"
                id="name"
                placeholder="name"
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="email">
                email
            </label>
            <input type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="title">
                title
            </label>
            <input type="text"
                name="title"
                id="title"
                placeholder="title"
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Title" 
                field="title"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="message">
                message
            </label>
            <textarea name="message"
                id="message"
                rows="10"
                placeholder="message"
                required
                aria-required="true"/>
            <ValidationError 
                prefix="message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit"
                disabled={state.submitting}
            >
                Send
            </button>
        </FormWrapper>
    )
}

export default ContactForm;