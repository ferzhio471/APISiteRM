import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';



@Component({
    selector:'app-character',
    templateUrl: './character.component.html',
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input() character:Character;
}