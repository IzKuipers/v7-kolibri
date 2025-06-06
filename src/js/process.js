const html = await loadHtml("body.html");
await load("js/v86.js");

class proc extends ThirdPartyAppProcess {
  constructor(handler, pid, parentPid, app, workingDirectory) {
    super(handler, pid, parentPid, app, workingDirectory);
  }

  async render() {
    const body = this.getBody();
    body.innerHTML = html;
    const screen_container = body.querySelector("#screen_container");
    const canvas = screen_container.getElementsByTagName("canvas")[0];
    const close = body.querySelector("#closeButton");

    close.addEventListener("click", () => {
      this.closeWindow();
    });

    canvas.addEventListener("click", async () => {
      await canvas.requestPointerLock();
    });

    const wasm = await fs.direct(
      util.join(this.workingDirectory, "bin/v86.wasm")
    );
    const bios = await fs.direct(
      util.join(this.workingDirectory, "bin/seabios.bin")
    );
    const vgaBios = await fs.direct(
      util.join(this.workingDirectory, "bin/vgabios.bin")
    );
    const iso = await fs.direct(
      util.join(this.workingDirectory, "bin/kolibrios.img")
    );

    const v86 = new window.V86({
      screen_container,
      wasm_path: wasm,
      //wasm: true,
      memory_size: 128 * 1024 * 1024,
      vga_memory_size: 8 * 1024 * 1024,
      bios: {
        url: bios,
      },
      vga_bios: {
        url: vgaBios,
      },
      fda: {
        url: iso,
      },
      autostart: true,
    });

    this.v86 = v86;
    console.log(v86);
  }

  async onClose() {
    await this.v86?.stop();
    this.v86?.v86?.cpu?.reset_memory();
    await this.v86?.destroy();
    this.v86 = null;

    return true;
  }
}

return { proc };
