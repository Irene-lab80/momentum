import React, { useEffect, useState } from 'react';
import AudioControls from './AudioControls';
import ButtonsAndVolumeBox from './ButtonsAndVolumeBox';

import PageContainer from './PlayerContainer';

import PlayerTemplate from './PlayerTemplate';
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
  const [curTrack, setCurTrack] = useState(0);

  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pause = () => {
    setIsPlaying(false);
    audio.pause();
  };

  useEffect(() => {
    if (audio) {
      setLength(audio.duration);
      setTime(audio.currentTime);
      // @ts-ignore
      setSlider(audio.currentTime ? ((audio.currentTime * 100) / audio.duration).toFixed(1) : 0);
    }
  }, [audio?.duration, audio?.currentTime]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    setAudio(new Audio(trackList[curTrack].url));
    setTitle(trackList[curTrack].title);
    if (audio) {
      return pause();
    }
  }, [curTrack]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  // const setAudioTime = () => {
  //   const curTime = audio.currentTime;
  //   setTime(curTime);
  //   setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
  // };

  const previous = () => {
    if (curTrack - 1 < 0) {
      setCurTrack(trackList.length - 1);
    } else {
      setCurTrack(curTrack - 1);
    }
  };

  const next = () => {
    if (curTrack < trackList.length - 1) {
      setCurTrack(curTrack + 1);
    } else {
      setCurTrack(0);
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
          <AudioControls isPlaying={isPlaying} play={play} pause={pause} previous={previous} next={next} />
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
