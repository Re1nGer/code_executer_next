import {useState} from "react";

export const useResizeWindow = (h = 300, w = 300) => {

    //TODO: Add width handlers
    const [height, setHeight] = useState(h); //default width of the window

    const [drag, setDrag] = useState({
        active: false,
        y: ""
    });

    const startResize = e => {
        setDrag({
            active: true,
            y: e.clientY
        });
    };

    const resizeFrame = e => {
        const { active, x, y } = drag;
        if (active) {
            const yDiff = Math.abs(y - e.clientY);

            const newH = y > e.clientY ? height + yDiff : height - yDiff;

            setDrag({ ...drag, y: e.clientY });

            setHeight(newH);
        }
    };

    const stopResize = e => {
        setDrag({ ...drag, active: false });
    };

    return {
        height,
        drag,
        setDrag,
        startResize,
        resizeFrame,
        stopResize
    }
}