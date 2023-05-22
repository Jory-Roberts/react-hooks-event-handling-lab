// Code Keypad Component Here

function Keypad() {
    function handleUserPassword() {
        console.log('Entering password....')
    }
    return (
        <div>
            <input
                autoFocus
                type='password'
                placeholder='Enter password'
                required
                onChange={(e) => handleUserPassword(e.target.value)}
            />
        </div>
    )
}

export default Keypad
