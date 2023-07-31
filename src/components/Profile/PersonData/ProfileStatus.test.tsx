import {create} from "react-test-renderer";
import {ProfileStatus} from "components/Profile/PersonData/ProfileStatus";

describe('test profileComponent', () => {
    test('input should to be status props text', () => {
        const component = create(<ProfileStatus
            updateStatus={(updateStatus) => {}}
            status={'testStatus'}
            isHostUser={false}
        />)
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance?.state.input).toBe('testStatus')
    })

    test('span should to be has status props text', () => {
        const component = create(<ProfileStatus
            updateStatus={(updateStatus) => {}}
            status={'testStatus'}
            isHostUser={false}
        />)
        const root = component.root
        // @ts-ignore
        let span = root.findByType('span')
        expect(span?.children.length).toBe(1)
        expect(span?.children[0]).toBe('testStatus')
    })

    test('if isEditMode === false input should not be', () => {
        const component = create(<ProfileStatus
            updateStatus={(updateStatus) => {}}
            status={'testStatus'}
            isHostUser={false}
        />)
        const root = component.root
        //expect error because input undefined
        expect( () => root.findByType('input')).toThrow()
    })

    test('if onClick span isEditMode should be true', () => {
        const component = create(<ProfileStatus
            updateStatus={(updateStatus) => {}}
            status={'testStatus'}
            isHostUser={false}
        />)
        const instance = component.getInstance()
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        // @ts-ignore
        expect( instance?.state.isEditMode).toBeTruthy()
    })
})