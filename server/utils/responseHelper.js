export const successDetail = {
    "200": "Successful.",
    "201": "Created Successful."
}

export const errorCode = {
    "23502": "NULL_COLUMN",
    "23505": "DUPLICATE_DATA",
}

export const errorsDetails = {
    "unauthorize": "Unauthorized.",
    "default": "Internal Server Error.",
    "required_token": "Required Token to access.",
    "invalid_token": "Invalid token",
    "token_expired": "Token Expired.",
    "not_found": "Not found.",
    "bad_request": "Bad request.",
    "waitng_for_approve": "Need to wait for approval by admin.",

    // CUSTOMER
    "waiting_for_confirm": "Need to comfirm email before.",
    // profile change password.
    "mismatch": "password mismatch.",
    "duplicate_old_and_new_pass": "Duplicate between old password and new password.",
    "rejected_by_admin": "Your Account is rejected by admin.",

    // Mail errors
    "mail_error": "Send mail error.",
    //SQL Error
    "23502": "$col null at $table",
    "23505": "Duplicate data in $table.",
}

export const errorsSellerRegister = {
    "DUPLICATE_EMAIL": "DUPLICATE_EMAIL"
}

export const errorSellerChangePassword = {
    "DUPLICATE_OLD_AND_NEW_PASS": "DUPLICATE_OLD_AND_NEW_PASS",
    "MISMATCH": "MISMATCH"
}

export const errorSellerPaymentMethod = {
    "DUPLICATE_METHOD": "DUPLICATE_METHOD",
}

export const errorAuthorize = {
    "REQUIRED_TOKEN": "REQUIRED_TOKEN",
    "JWT_EXPIRED": "JWT_EXPIRED",
    "INVALID_TOKEN": "INVALID_TOKEN"
}