import Aux from "../../../hoc/Aux/Aux";
import Navigation from "../Navigation/Navigation";

export default function SideDrawer(props) {
    return (
        <Aux>
            <div>
                <div>Logo</div>
                <Navigation />
            </div>
        </Aux>
    );
}
