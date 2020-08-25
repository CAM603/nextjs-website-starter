// Components
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
    return (
        <ul>
            <NavigationItem slug="/porfolio">Portfolio</NavigationItem>
            <NavigationItem slug="/awards">Awards</NavigationItem>
            <NavigationItem slug="/about">About</NavigationItem>
            <NavigationItem slug="/contact">Contact</NavigationItem>
        </ul>
    );
}
