import React from 'react'
import './Social.css'
import WebIcon from '@mui/icons-material/Web'; import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Social() {
    return (
        <div>
            <ul class='social'>
                <li>
                    <a target="_blank" href="https://siddharthroyx.netlify.app/">
                        <WebIcon />
                    </a>
                </li>

                <li>
                    <a target="_blank" href="mailto:siddharth_pampana@srmap.edu.in">
                        <MailIcon />

                    </a>
                </li>

                <li>
                    <a target="_blank" href="#">
                        <GitHubIcon />

                    </a>
                </li>

                <li>
                    <a target="_blank" href="#">
                        <LinkedInIcon />

                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Social