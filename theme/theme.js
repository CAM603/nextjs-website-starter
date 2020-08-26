const breakpoints = ["360px", "768px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

export default {
    colors: {
        light: "#eeeeee",
    },
    breakpoints,
    variants: {
        layout: {
            width: "100%",
            marginTop: "56px",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            maxWidth: 1200,
        },
    },
};
