// Code Keypad Component Here

function Keypad() {
    return (
        <div>
            <input
                autoFocus
                type='password'
                placeholder='Enter password'
                required
                onChange={(e) => console.log('Entering password....')}
            />
        </div>
    )
}

export default Keypad
