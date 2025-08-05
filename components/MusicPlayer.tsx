import { useEffect, useRef, useState } from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const playlist = [
    {
        src: 'audio/tourshit.mp3',
        title: 'Tour Shit',
        artist: 'Seedhe Maut',
        albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dc/7f/0b/dc7f0ba8-fee2-faa9-f78b-abd0dd41d14b/859786713396_cover.jpg/600x600bb.jpg',
    },
    {
        src: 'audio/att.mp3',
        title: 'At The Top',
        artist: 'Talhah Anjum',
        albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9c/b7/35/9cb7352d-f783-c35b-29b4-da966ca25f07/artwork.jpg/600x600bb.jpg',
    },
    {
        src: 'audio/buredin.mp3',
        title: 'Bure Din',
        artist: 'Seedhe Maut',
        albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/01/65/2c/01652c3c-4e83-5e12-fafb-dee660157da4/859789689889_cover.jpg/600x600bb.jpg',
    },
    {
        src: 'audio/felony.mp3',
        title: 'Felony',
        artist: 'TY, Calm & Faris',
        albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/08/d9/3e/08d93e16-fe19-db92-b432-5d9824399bc9/196872019032.jpg/600x600bb.jpg',
    },
    // Add more songs as needed
];

export default function MusicPlayer() {
    const [play, setPlay] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(playlist[currentTrackIndex].src);
            audioRef.current.addEventListener('ended', handleNextTrack);
        } else {
            audioRef.current.src = playlist[currentTrackIndex].src;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', handleNextTrack);
                audioRef.current.pause();
            }
        };
    }, [currentTrackIndex]);

    useEffect(() => {
        if (audioRef.current) {
            if (play) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [play]);

    const handlePlayPause = () => {
        setPlay(!play);
    };

    const handleNextTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        setPlay(true);

    };

    const handlePrevTrack = () => {
        setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
        setPlay(true);

    };

    const handleTrackEnd = () => {
        handleNextTrack();
        setPlay(true);

    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [currentTrackIndex]);

    const [isHovered, setIsHovered] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;
        if (!isHovered) {
            timeout = setTimeout(() => {
                setIsShrunk(true);
            }, 3000); // Adjust the delay as needed
        } else {
            setIsShrunk(false);
        }
        return () => clearTimeout(timeout);
    }, [isHovered]);

    return (
        <div
            className={`fixed left-6 bottom-6 z-[99999] transition-all duration-500 ease-in-out transform
                ${isShrunk ? "w-[75px] opacity-40" : "w-[400px]"} overflow-hidden p-2`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative flex items-center justify-between gap-2 z-[9999] rounded-md backdrop-blur-sm">
                <img
                    className={`w-[60px] h-[60px] rounded-full ${play ? "animate-spin" : "animate-spin-paused"}`}
                    src={playlist[currentTrackIndex].albumArt}
                    alt="Track Cover"
                />
                <div className={`absolute left-[70px] transition-opacity duration-500 ${isShrunk ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="font-bold">{playlist[currentTrackIndex].title}</p>
                    <p className="text-xs">{playlist[currentTrackIndex].artist}</p>
                </div>
                <div className="flex gap-4 cursor-pointer ml-auto">
                    <TbPlayerTrackPrevFilled onClick={handlePrevTrack} />
                    {play ? (
                        <FaPause onClick={handlePlayPause} />
                    ) : (
                        <FaPlay onClick={handlePlayPause} />
                    )}
                    <TbPlayerTrackNextFilled onClick={handleNextTrack} />
                </div>
                <audio ref={audioRef} onEnded={handleTrackEnd}></audio>
                <div className="absolute -right-3 p-2 rounded-full backdrop-blur-lg bg-white/10 text-sm -top-3">
                    <BiSolidPlaylist />
                </div>
            </div>
        </div>
    );
}
