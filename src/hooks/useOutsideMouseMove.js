import { useEffect } from 'react';

/**
 *
 * @param {*} ref - Ref of your parent div
 * @param {*} callback - Callback which can be used to change your maintained state in your component
 */
const useOutsideMouseMove = (ref, callback) => {
    useEffect(() => {
        const handleClickOutside = (evt) => {
            if (ref.current && !ref.current.contains(evt.target)) {
                callback(); //Do what you want to handle in the callback
            }
        };
        document.addEventListener('mouseover', handleClickOutside);
        return () => {
            document.removeEventListener('mouseover', handleClickOutside);
        };
    });
};

export default useOutsideMouseMove;