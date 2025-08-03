const DisplaySize = {
  width: 700,
  height: 210,
};

const VideoSize = {
  width: 640,
  height: 480,
};

const VideoClip = {
  startX: 95,
  startY: 170,
  width: 450,
  height: 160,
};

const Config = {
  blinkLimit: 0.25, // 눈 깜빡임 임계값
  minFrames: 2, // 깜빡임으로 판단할 최소 연속 프레임 수
  dotLimit: 400, // 모스 부호 점 최대 지속시간 (ms)
  ignoreDelay: 50,
  resetDelay: 2000, // 입력 없을 때 모스 리셋 대기 시간 (ms)
  length: 5, // 모스 부호 비트 길이
};

export { DisplaySize, VideoSize, VideoClip, Config };
