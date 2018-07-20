import { AmmoCapacitiesModel } from './ammo-capacities.model';
import { AugmentationModel } from './augmentation.model';
import { DecorationModel } from './decoration.model';
import { ItemModel } from './item.model';
import { MelodiesModel } from './melodies.model';
import { MelodyEffectModel } from './melody-effect.model';
import { SetBonusModel } from './set-bonus.model';
import { SharpnessModifierModel } from './sharpness-modifier.model';
import { SkillModel } from './skill.model';
import { WeaponModifierModel } from './weapon-modifier.model';

export class AppDataModel {
	weaponModifiers: WeaponModifierModel[];
	sharpnessModifiers: SharpnessModifierModel[];
	weapons: ItemModel[];
	armor: ItemModel[];
	charms: ItemModel[];
	setBonuses: SetBonusModel[];
	skills: SkillModel[];
	decorations: DecorationModel[];
	augmentations: AugmentationModel[];
	ammoCapacities: AmmoCapacitiesModel[];
	melodies: MelodiesModel[];
	melodyEffect: MelodyEffectModel[];

	constructor() {
		this.weaponModifiers = new Array<WeaponModifierModel>();
		this.sharpnessModifiers = new Array<SharpnessModifierModel>();
		this.weapons = new Array<ItemModel>();
		this.armor = new Array<ItemModel>();
		this.charms = new Array<ItemModel>();
		this.setBonuses = new Array<SetBonusModel>();
		this.skills = new Array<SkillModel>();
		this.decorations = new Array<DecorationModel>();
		this.augmentations = new Array<AugmentationModel>();
		this.ammoCapacities = new Array<AmmoCapacitiesModel>();
		this.melodies = new Array<MelodiesModel>();
		this.melodyEffect = new Array<MelodyEffectModel>();
	}
}
