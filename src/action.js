export function Login(data) {
   
    let payload;
    console.log("in action", data)
    if (data.error) {
            payload = {
                message: "Invalid Login",
                success: false
            }
        
    }
    else {
        payload = {
            success: true,
            message: "Logged In Successful"
        }
    }
    return {
      type: 'login',
      payload
    }
  }