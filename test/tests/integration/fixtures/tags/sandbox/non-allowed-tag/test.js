const TwingTestIntegrationTestCaseBase = require('../../../../../../integration-test-case');

module.exports = class extends TwingTestIntegrationTestCaseBase {
    getDescription() {
        return '"sandbox" tag with non-allowed tag';
    }

    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));
        templates.set('foo.twig', require('./foo.twig'));

        return templates;
    }

    getExpectedErrorMessage() {
        return 'TwingSandboxSecurityNotAllowedTagError: Tag "do" is not allowed in "foo.twig" at line 1.';
    }
};
