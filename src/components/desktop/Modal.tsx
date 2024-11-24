import React, { useState, useRef, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
    program: string;
    closeProgram: () => void;
    minimizeProgram: () => void;
    children: React.ReactNode;
    isMinimized: boolean;
}

const Modal: React.FC<ModalProps> = ({ program, closeProgram, minimizeProgram, children, isMinimized }) => {
    const [isDragging, setIsDragging] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const initialPosition = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        initialPosition.current = {
            x: e.clientX - (modalRef.current?.offsetLeft || 0),
            y: e.clientY - (modalRef.current?.offsetTop || 0),
        };
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && modalRef.current) {
            modalRef.current.style.left = `${e.clientX - initialPosition.current.x}px`;
            modalRef.current.style.top = `${e.clientY - initialPosition.current.y}px`;
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div className={`modal ${isMinimized ? 'hidden' : ''}`} ref={modalRef}>
            <div className="modal-header" onMouseDown={handleMouseDown}>
                <h2>{program}</h2>
                <div className="modal-action">
                    <button onClick={minimizeProgram}>_</button>
                    <button onClick={closeProgram}>X</button>
                </div>
            </div>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;
