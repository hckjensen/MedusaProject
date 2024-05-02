import style from "./Footer.module.scss"
import PropTypes from 'prop-types'

const Footer = ({ sections }) => {

    sections = [
        {
            title: "Contact",
            links: [
                "Supercoffeeroad 223b",
                "92230 New Coffeeland",
                "Phone: 22331122",
                "Email: coffeeland@info.com"

            ]
        },
        {
            title: "Legal",
            links: [
                "Cookie policy",
                "Return policy",
                "Shipping",
                "Terms and Conditions"

            ]
        },
        {
            title: "About",
            links: [
                "History",
                "The people behind",
                "Partnerships",
                "International"

            ]
        }
    ]

    return (
        <div className={style.footer}>
            {sections.map((section, index) => {
                return (
                    <div key={index}>
                        <h2>{section.title}</h2>
                        <ul>
                            {section.links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <p>{link}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

Footer.propTypes = {
    sections: PropTypes.array
}

export default Footer