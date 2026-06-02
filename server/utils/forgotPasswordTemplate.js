const forgotPasswordTemplate = ({ name, otp }) => {
    return `
    <div>
        <p>Dear, ${name} </p>
        <p>You're requested a password reset. Please use following
        otp code to reset your password</p>
        <div style="background:yellow; font-size:20px; padding:20px; text-align:center; font-weight:800;">
           ${otp}
        </div>
        <p>
        This otp is valid for 1 hour only. Enter this opt in the Nutriorg
        website to proceed with the resetting your password
        </p>
        <br />
        </br>
        <p>Thank You</p>
        <p>Nutriorg</p>
    </div>
    `
}

export default forgotPasswordTemplate