// first idea then implement
// 1. interface 2. abstract class

//idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// //implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log(`Music Playing....`);
//   }

//   pause() {
//     console.log("Music paused....");
//   }

//   stop() {
//     console.log("Music stop....");
//   }
// }

// const musicPlayer = new MusicPlayer(); instance
// musicPlayer.play();                    // we can not use instance on abstract


//abstract
//idea
abstract class MediaPlayer {
    abstract play():void
    abstract pause():void
    abstract stop():void
}

// we can not use instance in parent class we need implementation with child class

//implementation
 class EmonMusicPlayer extends MediaPlayer{
    play(): void {
        console.log("Music Playing..");
    }

    pause(): void {
        console.log("Music Paused..");
    }

    stop(): void {
        console.log("Music Stop..");
    }
}

const musicPlayer = new EmonMusicPlayer()
musicPlayer.pause()