import { LANG } from '../utils/constants';
import aboutItems from './aboutItems';
import aboutItemsEn from './en/aboutItemsEn';
import aboutItemsRu from './ru/aboutItemsRu';
import contactItem from './contactItem';
import contactItemEn from './en/contactItemEn';
import contactItemRu from './ru/contactItemRu';
import itseems from './itseems.json';
import itseemsEn from './en/itseemsEn.json';
import itseemsRu from './ru/itseemsRu.json';
import itSeemsProject from './itSeemsProject.json';
import portfolioItems from './portfolioItems';
import portfolioItemsEn from './en/portfolioItemsEn';
import portfolioItemsRu from './ru/portfolioItemsRu';
import portfolioItemsDisabled from './portfolioItemsDisabled';
import portfolioItemsDisabledEn from './en/portfolioItemsDisabledEn';
import portfolioItemsDisabledRu from './ru/portfolioItemsDisabledRu';
import specItems from './specItems';
import specItemsEn from './en/specItemsEn';
import specItemsRu from './ru/specItemsRu';
// import tech from './tech.json';
import technologies from './technologies.json';
import tellme from './tellme.json';
import tellmeEn from './en/tellmeEn.json';
import tellmeRu from './ru/tellmeRu.json';
import tellmeProject from './tellmeProject.json';

let aboutItem, contactIt, itseem, itSeemProject, portfolioItem, portfolioItemDisabled, specItem, tec, tecnology, telme, telmeProject, vot;


switch (LANG){
    case 'ru':
        aboutItem = aboutItemsRu;
        specItem = specItemsRu;
        contactIt = contactItemRu;
        portfolioItem = portfolioItemsRu;
        portfolioItemDisabled = portfolioItemsDisabledRu;
        itseem = itseemsRu;
        telme = tellmeRu;
        itSeemProject = itSeemsProject;
        telmeProject = tellmeProject;
        tecnology = technologies;
        break;
    case 'en':
        aboutItem = aboutItemsEn;
        specItem = specItemsEn;
        contactIt = contactItemEn;
        portfolioItem = portfolioItemsEn;
        portfolioItemDisabled = portfolioItemsDisabledEn;
        itseem = itseemsEn;
        telme = tellmeEn;
        itSeemProject = itSeemsProject;
        telmeProject = tellmeProject;
        tecnology = technologies;
        break;
    default:
        aboutItem = aboutItems;
        specItem = specItems;
        contactIt = contactItem;
        portfolioItem = portfolioItems;
        portfolioItemDisabled = portfolioItemsDisabled;
        itseem = itseems;
        itSeemProject = itSeemsProject;
        telme = tellme;
        telmeProject = tellmeProject;
        tecnology = technologies;

        break;
}



export { aboutItem, contactIt, itseem, itSeemProject, portfolioItem, portfolioItemDisabled, specItem, tec, tecnology, telme, telmeProject, vot };