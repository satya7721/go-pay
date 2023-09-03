"use client"
import React,{useEffect,useRef,useState} from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CropFreeIcon from '@mui/icons-material/CropFree';
import {BrowserMultiFormatReader} from '@zxing/library';

const ScanScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    async function startScanning() {
      try {
        const selectedDeviceId = await codeReader.listVideoInputDevices();
        if (selectedDeviceId && selectedDeviceId.length > 0) {
          const constraints: MediaStreamConstraints = {
            video: { deviceId: selectedDeviceId[0].deviceId },
            audio: false,
          };

          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          codeReader.decodeFromVideoDevice(selectedDeviceId[0].deviceId, videoRef.current, (result, err) => {
            if (result) {
              console.log('QR Code Scanned:', result.getText());
              alert("op")
            }
           
          });
        } else {
          console.error('No video input devices found.');
        }
      } catch (error) {
        console.error('QR Code Scanner Error:', error);
      }
    }

    startScanning();

    return () => {
      codeReader.reset();
    };
  }, []);


  return (
    <div className="scan-wrapper">
      <div className="scan-header">
        <div className="scan-camera">
        <CropFreeIcon sx={{
            color:'#f9e6ff',
            fontSize : '25vh',
            position:'absolute'
          }} />
        <video ref={videoRef} width={"100%"} height={"25vh"} autoPlay playsInline style={{
          minHeight : '25vh',
        
          width:'50vw !important'
        }} />
          
             <div>
             
      </div>
      <div> 
      </div>
        </div>
      </div>
      <div className="scan-progress">
        <LinearProgress />
      </div>

      <div className="scan-warning">
        <div className="scan-warning-text">
          Allow Camera access from browser !
        </div>
      </div>
    </div>
  )
}

export default ScanScreen