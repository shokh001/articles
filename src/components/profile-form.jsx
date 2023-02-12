import { useSelector } from 'react-redux'
import { Input } from '../ui'

const ProfileForm = props => {
    const { isLoading } = useSelector(state => state.auth)
    const { username, bio, setBio, setUsername, formSubmit } = props

    return (
        <form onSubmit={formSubmit}>
            <Input label={'Username'} state={username} setState={setUsername} />
            <Input label={'Bio'} state={bio} setState={setBio} />
            <button className='w-100 btn btn-lg btn-primary mt-2' disabled={isLoading} type='submit'>
                {isLoading ? 'Loading...' : 'Update'}
            </button>
        </form>
    )
}

export default ProfileForm
