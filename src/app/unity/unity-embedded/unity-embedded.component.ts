import { Component, ElementRef, NgZone, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnityGameInfo } from '../../models/unity-game-info';
import { UNITY_GAMES } from '../../models/constants';

declare global {
  interface Window { createUnityInstance?: any; }
}

@Component({
  selector: 'app-unity-embedded',
  standalone: false,
  templateUrl: './unity-embedded.component.html',
  styleUrls: ['./unity-embedded.component.css']
})
export class UnityEmbeddedComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private unityInstance: any;
  loading = 0;


  id = '';
  unityGameInfo: UnityGameInfo | undefined;


  constructor(activatedRoute: ActivatedRoute){
    let id = activatedRoute.snapshot.paramMap.get('id');
        if(id) {
          this.id = id;
          this.unityGameInfo = UNITY_GAMES.find(u => u.id === this.id);
          console.log(this.unityGameInfo);
        } 
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = `/assets/unity/${this.unityGameInfo?.folderName}/Build/${this.unityGameInfo?.folderName}.loader.js`;
    ///script.src = `/${this.unityGameInfo?.folderName}.loader.js`
    console.log(script.src);
    script.onload = () => this.bootUnity();
    document.body.appendChild(script);
  }

  private async bootUnity() {
    const canvas = this.canvasRef.nativeElement;

    // iPhone 11 physical pixels in portrait
    canvas.width  = 828;
    canvas.height = 1792;

    // Click-to-focus for keyboard input (optional)
    canvas.addEventListener('click', () => canvas.focus());

    const buildBase = `/assets/unity/${this.unityGameInfo?.folderName}/Build`;
    const config = {
      dataUrl:       `${buildBase}/${this.unityGameInfo?.folderName}.data.unityweb`,
      frameworkUrl:  `${buildBase}/${this.unityGameInfo?.folderName}.framework.js.unityweb`,
      codeUrl:       `${buildBase}/${this.unityGameInfo?.folderName}.wasm.unityweb`,
      //dataUrl:       `${this.unityGameInfo?.folderName}.data`,
      //frameworkUrl:  `${this.unityGameInfo?.folderName}.framework.js`,
      //codeUrl:       `${this.unityGameInfo?.folderName}.wasm`,
      devicePixelRatio: 1      // lock DPR so 828x1792 is the render size
    };

    this.unityInstance = await window.createUnityInstance(
      canvas,
      config,
      (p: number) => this.loading = p
    );

    setTimeout(() => canvas.focus(), 0);
  }

  async ngOnDestroy() {
    await this.unityInstance?.Quit?.().catch(() => {});
  }
}
