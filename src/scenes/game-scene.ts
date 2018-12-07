import background from '../assets/images/background-city.png';
import building from '../assets/images/building.png';
import car from '../assets/images/car.png';
import house from '../assets/images/house.png';
import tree from '../assets/images/tree.png';

import treeAudio from '../assets/audio/arbol.mp3';
import carAudio from '../assets/audio/auto.mp3';
import houseAudio from '../assets/audio/casa.mp3';
import buildingAudio from '../assets/audio/edificio.mp3';
import correctAudio from '../assets/audio/correct.mp3';
import wrongAudio from '../assets/audio/wrong.mp3';

export class GameScene extends Phaser.Scene {
  private itemGroup: Phaser.GameObjects.Group;
  private questionText: Phaser.GameObjects.Text;
  private questionItem: Phaser.GameObjects.Sprite;
  private correctSound: Phaser.Sound.BaseSound;
  private wrongSound: Phaser.Sound.BaseSound;

  constructor() {
    super({
      key: 'Game'
    })
  }

  preload() {
    this.load.image('background', background);
    this.load.image('building', building);
    this.load.image('car', car);
    this.load.image('house', house);
    this.load.image('tree', tree);

    this.load.audio('treeAudio', treeAudio);
    this.load.audio('carAudio', carAudio);
    this.load.audio('houseAudio', houseAudio);
    this.load.audio('buildingAudio', buildingAudio);
    this.load.audio('correctAudio', correctAudio);
    this.load.audio('wrongAudio', wrongAudio);
  }

  create() {
    this.add.sprite(0,0, 'background').setOrigin(0, 0);
    const building = this.add.sprite(100, 240, 'building');
    const house = this.add.sprite(240, 280, 'house').setScale(0.8);
    const car = this.add.sprite(410, 300, 'car').setScale(0.8);
    const tree = this.add.sprite(550, 250, 'tree');

    building.setData('audio', this.sound.add('buildingAudio'));
    building.setData('spanish', 'edificio');
    house.setData('audio', this.sound.add('houseAudio'));
    house.setData('spanish', 'casa');
    car.setData('audio', this.sound.add('carAudio'));
    car.setData('spanish', 'automóvil');
    tree.setData('audio', this.sound.add('treeAudio'));
    tree.setData('spanish', 'árbol');

    this.correctSound = this.sound.add('correctAudio');
    this.wrongSound = this.sound.add('wrongAudio');

    this.itemGroup = this.add.group();
    this.itemGroup.addMultiple([building, house, car, tree]);

    this.questionText = this.add.text(30, 20, '', {
      font: '28px Open Sans',
      fill: '#ffffff'
    });

    this.itemGroup.getChildren().forEach((item: Phaser.GameObjects.Sprite)  => {
      const correctTween = this.tweens.add({
        targets: item,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 300,
        paused: true,
        yoyo: true,
        ease: 'Quad.easeInOut'
      });

      const wrongTween = this.tweens.add({
        targets: item,
        scaleX: 1.5,
        scaleY: 1.5,
        duration: 300,
        angle: 90,
        paused: true,
        yoyo: true,
        ease: 'Quad.easeInOut'
      });

      const alphaTween = this.tweens.add({
        targets: item,
        alpha: 0.7,
        duration: 200,
        paused: true
      });

      item.setInteractive();

      // NOT WORKING 'Mobile Mode'
      item.on('pointerover', () => {
        alphaTween.restart();
      });

      item.on('pointerdown', () => {
        const result = this.processAnswer(item);

        if (result) {
          correctTween.restart();
        } else {
          wrongTween.restart();
        }

        this.showNextQuestion();
      });

      item.on('pointerout', () => {
        alphaTween.stop();
        item.alpha = 1;
      });
    });

    this.showNextQuestion();
  }

  processAnswer(clickedItem: Phaser.GameObjects.Sprite) {
    // compare user response with correct response
    if (this.questionItem == clickedItem) {
      this.correctSound.play();
      return true;
    } else {
      this.wrongSound.play();
      return false;
    }
  }

  showNextQuestion() {
    // select a random word
    this.questionItem = Phaser.Math.RND.pick(this.itemGroup.getChildren());
    // play a sound for the word
    this.questionItem.getData('audio').play();
    // show the next of the word in Spanish
    this.questionText.setText(this.questionItem.getData('spanish'));
  }
}
