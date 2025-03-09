import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { FormWrapper } from './form.styled';
import { FormattedMessage, useIntl } from 'react-intl';

const ContactForm = () => {
    const intl = useIntl()
    const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACTFORM_FORMSPREE_KEY);

    return state.succeeded ? (
        <div>
            <p>
                <FormattedMessage id=""/>Your message is successfully submited!</p>
            <p>We'll contact you soon</p>
        </div>
    ) : (
        <FormWrapper
            onSubmit={handleSubmit}
            >
            <label className="visually-hidden"
                htmlFor="name">
                <FormattedMessage id="global.formName"/>
            </label>
            <input type="text"
                name="name"
                id="name"
                placeholder={intl.formatMessage({id: 'global.formName'})}
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="email">
                <FormattedMessage id="cart.email"/>
            </label>
            <input type="email"
                name="email"
                id="email"
                placeholder={intl.formatMessage({id: 'cart.email'})}
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="title">
                <FormattedMessage id="global.title"/>
            </label>
            <input type="text"
                name="title"
                id="title"
                placeholder={intl.formatMessage({id: 'global.title'})}
                required
                aria-required="true"/>
            <ValidationError 
                prefix="Title" 
                field="title"
                errors={state.errors}
            />
            <label className="visually-hidden"
                htmlFor="message">
                <FormattedMessage id="global.message"/>
            </label>
            <textarea name="message"
                id="message"
                rows="10"
                placeholder={intl.formatMessage({id: 'global.message'})}
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
                <FormattedMessage id="global.send"/>
            </button>
        </FormWrapper>
    )
}

export default ContactForm;