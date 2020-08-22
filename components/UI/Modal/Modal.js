import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal(props) {
    return (
        <Aux>
            <Backdrop />
            <div>{props.children}</div>
        </Aux>
    );
}
