function getPageNameFromLocation(): string {
    const pathname = window.location.pathname.substr(1);
    return pathname === "" ? "weather" : pathname;
}

export {
    getPageNameFromLocation
}