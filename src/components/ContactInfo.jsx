import React, { Element } from 'react';

/*
* Please note that AsciiImage is a component that raises warnings,
* but its working, when i get the chance ill take a look and make a PR
*/

const linkedinLogo = '/linkedin.png';
const linkedinUrl = 'http://www.linkedin.com/in/lucas-rovaris-4178271b';

const ContactInfo = ():Element => (
    <div>
        <a
            rel="noopener noreferrer"
            href={ linkedinUrl }
            target="_blank"
        >
            <img alt="Yeah! this guy!" src={ linkedinLogo } />
        </a>
    </div>
);

export default ContactInfo;
