function aboutFromHome() {
    $("#homePage").fadeOut(1000, () => {
        VANTA.NET({
            el: "#aboutPage",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x222222,
            backgroundColor: 0x0
        })

        $("#aboutPage").fadeIn(1000)
    })
}