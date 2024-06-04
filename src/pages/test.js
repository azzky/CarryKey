import React from "react"
import { Resend } from 'resend';

const Test = () => {
    const resend = new Resend(process.env.GATSBY_RESEND_KEY);

    const handler = async () => {
        await resend.emails.send({
            from: 'orders@carrykey.me',
            to: 'azzky.demiurg@gmail.com',
            subject: 'Hello World',
            html: 'test'
        });
    }
    return <div>
        <button onClick={handler}>test!</button>
    </div>
}

export default Test