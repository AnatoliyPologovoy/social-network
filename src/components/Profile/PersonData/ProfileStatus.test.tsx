import {create} from "react-test-renderer";
import {ProfileStatus} from "components/Profile/PersonData/ProfileStatus";

describe('test1', () => {
    test('test1-1', () => {
        const component = create(<ProfileStatus status={'testStatus'}/>)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.status).toBe('testStatus')
    })
})