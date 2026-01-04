import {useEffect, useRef, useState} from 'react';
import imagepath from '/images/chatImage.svg';
import lightImage from '/images/chatImageLight.svg';
import {useTheme} from '../../../context/ThemeContext';
import deleteDark from '/images/deleteDark.svg';
import deleteLight from '/images/deleteLight.svg';
import trashDark from '/images/trashDark.svg';
import trashLight from '/images/trashLight.svg';
import ChatBox from './ChatBox';

const ChatButton = () => {
  const {theme} = useTheme();

  const isDarkTheme = theme === 'dark';

  return (
    <div className="fixed bottom-4 right-4">
      <img
        src={isDarkTheme ? lightImage : imagepath}
        alt="Chat"
        className="w-16 h-16"
      />
    </div>
  );
};

export default function ChatbotPopover() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const {theme} = useTheme();

  const isDarkTheme = theme === 'dark';

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-6 z-50">
      {/* Popover */}
      <div
        role="dialog"
        aria-hidden={!open}
        className={`
          absolute bottom-16 right-0 w-21rem rounded-xl bg-white border shadow-xl
          transition-all duration-200 origin-bottom-right
          ${
            open
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }
          border-4
          ${isDarkTheme ? 'border-light' : 'border-dark'}
        `}
      >
        <div
          className={`margin-dialog font-semibold text-gray-800 p-4 ${
            isDarkTheme ? 'bg-light' : 'bg-dark'
          }`}
        >
          <div className="flex items-center space-x-3 justify-between">
            <div className="flex text-base">
              <img
                src={isDarkTheme ? imagepath : lightImage}
                alt="Chat"
                className="w-10 h-10"
              />
              <div>
                Virtual Nishant
                <br />
                <span className="text-xs">Your Online Assistant</span>
              </div>
            </div>
            <div className="flex">
              <img
                alt="delete"
                className="w-6 h-6 mr-20 cursor-pointer"
                src={isDarkTheme ? trashDark : trashLight}
              />
              <img
                alt="delete"
                className="w-6 h-6 cursor-pointer"
                onClick={() => setOpen(false)}
                src={isDarkTheme ? deleteDark : deleteLight}
              />
            </div>
          </div>
        </div>
        <ChatBox />
      </div>

      {/* Toggle Button */}
      <button
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ChatButton />
      </button>
    </div>
  );
}
