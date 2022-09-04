import React, { useEffect, useState } from 'react';
import ButtonsAndVolumeBox from './ButtonsAndVolumeBox';
import ButtonsBox from './ButtonsBox';
import Next from './Next';
import PageContainer from './PlayerContainer';
import Pause from './Pause';
import Play from './Play';
import PlayerTemplate from './PlayerTemplate';
import Previous from './Previous';
import Progress from './Progress';
import Time from './Time';
import Title from './Title';
import TitleAndTimeContainer from './TitleAndTimeContainer';
import Volume from './Volume';

const fmtMSS = (s: any) => new Date(1000 * s).toISOString().substr(15, 4);

const Player = ({ trackList }: any) => {
  const [audio, setAudio] = useState(null) as any;
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState('');
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);

  const playlist = [] as any[];
  const [curTrack, setCurTrack] = useState(0);

  useEffect(() => {
    setAudio(new Audio(trackList[curTrack].url));
    setTitle(trackList[curTrack].title);
  }, []);

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  useEffect(() => {
    if (!playlist.includes(curTrack)) {
      setCurTrack(playlist[0]);
    }
  }, []);

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    if (index !== 0) {
      setCurTrack(playlist[index - 1]);
    } else {
      setCurTrack(playlist[playlist.length - 1]);
    }
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    if (index !== playlist.length - 1) {
      setCurTrack(playlist[index + 1]);
    } else {
      setCurTrack(playlist[0]);
    }
  };

  return (
    <PageContainer>
      <PlayerTemplate>
        <TitleAndTimeContainer>
          <Title title={title} />
          <Time
            time={`${!time ? '0:00' : fmtMSS(time)}/${
              !length ? '0:00' : fmtMSS(length)
            }`}
          />
        </TitleAndTimeContainer>
        <Progress
          value={slider}
          onChange={(e: any) => {
            setSlider(e.target.value);
            setDrag(e.target.value);
          }}
          onMouseUp={play}
          onTouchEnd={play}
        />
        <ButtonsAndVolumeBox>
          <ButtonsBox>
            <Previous onClick={previous} />
            {isPlaying ? (
              <Pause onClick={pause} />
            ) : (
              <Play onClick={play} />
            )}
            <Next onClick={next} />
          </ButtonsBox>
          <Volume
            value={volume}
            onChange={(e: any) => {
              setVolume(e.target.value / 100);
            }}
          />
        </ButtonsAndVolumeBox>
      </PlayerTemplate>
    </PageContainer>
  );
};

export default Player;
