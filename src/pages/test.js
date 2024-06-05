import React from "react"
import { Resend } from 'resend';

const resend = new Resend(process.env.GATSBY_RESEND_KEY);

const Test = () => {
    const handler = async () => {
        try {
            const { data, error } = await resend.emails.send({
                from: 'orders@carrykey.me',
                to: 'azzky.demiurg@gmail.com',
                subject: 'Hello World',
                html: '<p>test</p>'
            });

            if (error) {
                return Response.json({ error }, { status: 500 });
            }

            return Response.json({ data });
        } catch (error) {
            return Response.json({ error }, { status: 500 });
        }
        // await resend.emails.send({
        //     from: 'orders@carrykey.me',
        //     to: 'azzky.demiurg@gmail.com',
        //     subject: 'Hello World',
        //     html: 'test'
        // });
    }
    return <div>
        <button onClick={handler}>test!</button>
    </div>
}

export default Test