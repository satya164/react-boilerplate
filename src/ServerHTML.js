import React from "react";

export default function({ locale, title, description, body }) {
    return (
        <html lang={locale}>
            <head>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />

                <title>{title}</title>
            </head>
            <body>
                <div id="root" dangerouslySetInnerHTML={{ __html: body }} />

                <script src="/dist/bundle.min.js"></script>
            </body>
        </html>
    );
}
