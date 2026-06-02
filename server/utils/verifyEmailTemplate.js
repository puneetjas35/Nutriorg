const verifyEmailTemplate = ({name, url}) => {
    return`
    <p>Dear ${name}</p>
    <p>Thank you for registering Nutriorg.</p>
    <a href=${url} style="color:blue;background: orange; margin-top: 10px;; padding:20px">
        Verify email
    </a>
    `
}

export default verifyEmailTemplate

