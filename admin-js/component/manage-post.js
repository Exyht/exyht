/*
 |-----------------------------
 | Manage post title Component
 |-----------------------------
*/
Exyht.ManagePostComponent = Ember.Component.extend({
	actions: {
        editPostTrue: function(){
            var self = this;

            this.setProperties({
                'isEditingOnForPostTitle': true,
                'postIdForTypeBlogPost': this.get('id'),
                'isEditingOnForTypeBlogPost': true,
                'isProfileEditingOnForTypeBlogPost': false,
                'editingOnForProfSetCtlr': false,
                'titleForTypeBlogPost': this.get('title')
            });
            
            Ember.$.getJSON(Exyht.currentBaseUri+'/getOnlyPostBody/'+this.get('id')).then(function(data) {
                Ember.run(function() {
                    self.set('postBodyForTypeBlogPost', data.body);
                    var pb = self.get('postBodyForTypeBlogPost');
            
                    if(pb !== 'undefined' || pb !== ''){
                        self.sendAction('editPostTrue');
                    }
                    else{
                        alert('No post body! or Could not fetch data! Maybe server error.');
                    }
                });
            });

        },
        viewComments: function(){
            this.set('titleForCommentsController', this.get('title'));
            this.sendAction('viewComments', this.get('id'));
        }
    }
});