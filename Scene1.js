const Name = 'scene1'

class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: Name })
  }

  preload() {
    this.load.image('logo', './phaser-logo-small.png')
  }

  create() {
    this.add.image(400, 300, 'logo').setInteractive()

    this.input.on('gameobjectscroll', (pointer, obj) => {
      obj.y += 5 * pointer.netScrollY
    })
  }
}

Scene1.Name = Name