<script>
export default {
	bind: function(el, binding) {
		<% if (package_type === 'component') { %>// Here your code for the component<% } else { %>// Here your code for the directive<% } %>
	}
};
</script>
