let riveInstance, widthNumInput;

function updateCanvasHeight() {
    const browserWidth = window.innerWidth;
    const canvas = document.getElementById('riveCanvas');
    const widthDisplay = document.getElementById('widthDisplay');
}
riveInstance = new rive.Rive({
    src: 'rive.riv', 
    canvas: document.getElementById('riveCanvas'),
    autoplay: true,
    artboard: 'Artboard', 
    stateMachines: 'State Machine 1', 
    onLoad: () => {
        const inputs = riveInstance.stateMachineInputs('State Machine 1'); 
        widthNumInput = inputs.find(i => i.name === 'Number 1'); 
                    riveInstance.resizeDrawingSurfaceToCanvas();
        updateCanvasHeight();
        window.onresize = updateCanvasHeight;
    }
});